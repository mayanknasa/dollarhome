function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: "+text);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
