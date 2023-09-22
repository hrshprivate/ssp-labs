import tkinter as tk
from tkinter import Canvas
from PIL import Image, ImageDraw, ImageTk
import threading
import time


# Функция для создания изображения самолета
def create_airplane_image():
  width, height = 100, 50  # Уменьшили размер самолета
  image = Image.new("RGB", (width, height), "white")
  draw = ImageDraw.Draw(image)

  # Нарисуйте самолет (прямоугольник и треугольник)
  draw.rectangle([(10, 10), (90, 40)], fill="blue")
  points = [(10, 10), (10, 30), (0, 20)]
  draw.polygon(points, fill="red")

  return ImageTk.PhotoImage(image)


# Функция для обновления изображения на холсте и анимации движения
def update_canvas():
  x, y = 0, 200  # Начальная позиция самолета
  speed = 5  # Скорость движения самолета

  while True:
    airplane_image = create_airplane_image()
    canvas.itemconfig(canvas_image, image=airplane_image)
    canvas.image = airplane_image

    x += speed  # Перемещаем самолет вправо
    if x > 800:  # Если самолет вышел за пределы холста, возвращаем его в начальную позицию
      x = -100

    canvas.coords(canvas_image, x, y)  # Обновляем позицию самолета на холсте
    time.sleep(0.1)  # Меняем позицию каждые 100 миллисекунд


# Создаем главное окно
root = tk.Tk()
root.title("Летящий самолет")

# Создаем холст для отображения изображения
canvas = Canvas(root, width=800, height=400)
canvas.pack()

# Создаем изображение самолета
airplane_image = create_airplane_image()
canvas_image = canvas.create_image(0, 0, anchor=tk.NW, image=airplane_image)

# Запускаем отдельный поток для обновления изображения и анимации движения
update_thread = threading.Thread(target=update_canvas)
update_thread.daemon = True
update_thread.start()

# Запускаем главный цикл Tkinter для отображения окна
root.mainloop()
