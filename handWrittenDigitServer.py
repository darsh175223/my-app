from flask import Flask, jsonify
import tkinter as tk
from tkinter import Canvas, Button, Label, StringVar
import numpy as np
import tensorflow as tf
from PIL import ImageGrab, ImageOps  # Ensure ImageOps is imported

# Load the pre-trained model
model = tf.keras.models.load_model('mnist_model.h5')

app = Flask(__name__)

@app.route('/open-window', methods=['POST'])
def open_tkinter():
    # Launch the Tkinter GUI
    launch_tkinter()
    return jsonify({"status": "Tkinter GUI opened"})

def launch_tkinter():
    def clear_canvas():
        canvas.delete("all")

    def predict_digit():
        # Get the canvas data and make prediction
        x = root.winfo_rootx() + canvas.winfo_x()
        y = root.winfo_rooty() + canvas.winfo_y()
        x1 = x + canvas.winfo_width()
        y1 = y + canvas.winfo_height()
        img = ImageGrab.grab().crop((x, y, x1, y1)).convert('L')
        
        img = img.resize((28, 28))
        img = ImageOps.invert(img)  # Correctly importing ImageOps
        img_array = np.array(img)
        img_array = img_array / 255.0  # Normalize
        img_array = img_array.reshape(1, 28, 28, 1)  # Reshape for model input

        prediction = model.predict(img_array)
        predicted_digit = np.argmax(prediction)
        confidence = np.max(prediction) * 100

        result_var.set(f"Predicted: {predicted_digit} (Confidence: {confidence:.2f}%)")

    root = tk.Tk()
    root.title("Digit Recognizer")

    canvas = Canvas(root, width=280, height=280, bg='white')
    canvas.pack()

    def paint(event):
        x1, y1 = (event.x - 1), (event.y - 1)
        x2, y2 = (event.x + 1), (event.y + 1)
        canvas.create_oval(x1, y1, x2, y2, fill="black", width=5)

    canvas.bind("<B1-Motion>", paint)

    clear_button = Button(root, text="Clear", command=clear_canvas)
    clear_button.pack(side=tk.LEFT)

    predict_button = Button(root, text="Predict", command=predict_digit)
    predict_button.pack(side=tk.RIGHT)

    result_var = StringVar()
    result_label = Label(root, textvariable=result_var)
    result_label.pack()

    root.mainloop()

if __name__ == '__main__':
    app.run(port=5000)
