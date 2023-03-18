const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", () => {
    const reader = new FileReader();
    reader.readAsDataURL(image_input.files[0]);
    reader.addEventListener("load", () => {
        document.querySelector(".album-background").src = `${reader.result}`;
        document.querySelector(".album-img").src = `${reader.result}`;
    });
});
