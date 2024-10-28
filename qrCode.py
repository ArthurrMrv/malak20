import os
from dotenv import load_dotenv
import qrcode
from PIL import Image, ImageDraw

# Load environment variables from .env file
load_dotenv()

# Get the website URL from the environment variable
data = os.getenv("WEBSITE_URL")

# Function to create a linear gradient
def create_gradient_image(width, height, color1, color2):
    gradient = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(gradient)

    for i in range(height):
        # Calculate the color at this height
        r = int(color1[0] + (color2[0] - color1[0]) * i / height)
        g = int(color1[1] + (color2[1] - color1[1]) * i / height)
        b = int(color1[2] + (color2[2] - color1[2]) * i / height)
        draw.line((0, i, width, i), fill=(r, g, b))

    return gradient

# Choose background style: 'gradient' or 'solid'
background_style = 'gradient'  # Change to 'solid' for a static color background

# Define colors
gradient_color1 = (249, 168, 212)  # RGB for #f9a8d4
gradient_color2 = (243, 197, 240)  # RGB for #f3c5f0
static_color = (255, 182, 193)  # RGB for a solid light pink color

# Generate QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR Code instance
qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGBA")

# Set dimensions for the background image
width, height = qr_img.size

# Create a background image based on the selected style
if background_style == 'gradient':
    # Create a gradient background image
    background_img = create_gradient_image(width, height, gradient_color1, gradient_color2)
else:
    # Create a solid color background image
    background_img = Image.new('RGB', (width, height), static_color)

# Paste the QR code onto the background
background_img.paste(qr_img, (0, 0), qr_img)

# Rotate the image 45 degrees
final_img = background_img.rotate(45, expand=True)

# Save the final image
final_img.save("./styled_qr_code.png")

# Optionally show the image
# final_img.show()
