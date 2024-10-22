# pivotal-ai-email-templates

VSCode will automatically recommend extensions based on the `.vscode/extensions.json` file. Please go to Extensions > Recommendations and install these extensions:
- `Live Server`
- `Live Sass Compiler`

## Start the project

To start the project, ensure that you have the template files in the respective directories. The structure should look like this:

```plaintext
.
├── README.md
├── my-template
│   ├── index.html
│   └── style.scss
...
```

To start watching the files for changes, use the `Live Server` extension. Right-click on the `index.html` file and select `Open with Live Server`.
To start auto-compiling the SCSS files, use the `Live Sass Compiler` extension. Right-click on the `style.scss` file and select `Watch Sass`.

You can now open the `index.html` file in your browser to see the changes live as you edit both `html` and `scss` file.

Once you finish editing the template, you can copy the content of the compiled `style.css` file and paste it into the `style` tag in the `index.html` file.
