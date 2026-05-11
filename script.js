const input = document.querySelector(".command-input");
const output = document.querySelector(".output");

let previousCommand = "";

input.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {
        input.value = previousCommand;
    }

    if (event.key === "Escape") {
        output.innerHTML = "";
        input.value = "";
    }

    if (event.key === "Enter") {

        const command = input.value.trim();

        if (command === "") {
            return;
        }

        previousCommand = command;

        if (command === "help") {
            output.innerHTML = `
            <pre>cv      <span class="accent">→</span> resume</pre>

            <pre>about   <span class="accent">→</span> whoAmI <span class="accent">/</span> goals</pre>

            <pre>skills  <span class="accent">→</span> tech capabilities</pre>

            <pre>contact <span class="accent">→</span> links <span class="accent">/</span> socials</pre>

            <pre>clear   <span class="accent">→</span> clean output</pre>
            `;
        } else if (command === "about") {
            output.innerHTML = `
            <pre>
tudor (stefanita) ursan, 29 y/o

my background includes hands-on technical support, computer hardware
troubleshooting, and experience working with Windows and some Linux environments;
I enjoy learning how systems work, solving technical problems, and continuously
improving my skills through study and practical experience
            </pre>
            `;
        } else if (command === "skills") {
            output.innerHTML = `
            <pre>
 - computer building / repair
 - hardware configuration
 - OS installation / configuration
 - software troubleshooting
 - technical support
 - android device configuration
 - Linux fundamentals
 - english (B2)
            </pre>
            `;
        } else if (command === "cv") {
            output.innerHTML = `
            <pre>
resume <span class="accent">→</span> <a href="assets/cv.pdf" target="_blank">download pdf</a>
            </pre>
            `;
        } else if (command === "contact") {
            output.innerHTML = `
            <pre>
linkedin <span class="accent">→</span> <a href="https://linkedin.com/in/tudorursan" target="_blank">linkedin.com/in/tudorursan</a>
email    <span class="accent">→</span> <a href="mailto:tudor.ursan@proton.me">tudor.ursan@proton.me</a>
            </pre>
            `;
        } else if (command === "clear") {
            output.innerHTML = "";
        } else {
            output.innerHTML = `
            <p>
                <span class="error">command not found:</span> '${command}'
            </p>`;
        }

        input.value = "";
    }
});

document.addEventListener("click", function() {
    input.focus();
});
