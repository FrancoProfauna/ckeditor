import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react";
import { useMemo } from "react";

function App() {
  console.log(ClassicEditor.defaultConfig);

  const ckeditorConfig = useMemo(() => {
    return {
      language: "es",
      toolbar: [
        "undo",
        "redo",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "blockQuote",
        "|",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
      ],
      heading: {
        options: [
          { model: "paragraph", title: "Paragraph" },
          { model: "heading1", view: "h1", title: "Heading 1" },
          { model: "heading2", view: "h2", title: "Heading 2" },
          { model: "heading3", view: "h3", title: "Heading 3" },
        ],
      },
    };
  }, []);

  return (
    <div className="container">
      <CKEditorComponent
        editor={ClassicEditor}
        config={ckeditorConfig}
        data="<h1>Título 1</h1><p>&nbsp;</p><h2>Título 2</h2><p>&nbsp;</p><h3>Título 3</h3><p>&nbsp;</p><p>Hola <strong>perros</strong>, les habla <i>Dios</i></p><p>&nbsp;</p><blockquote><p>Hola amigos de YouTube</p></blockquote><p>&nbsp;</p><ul><li>Lorem uno.<ul><li>Lorem uno uno.</li></ul></li></ul><p>&nbsp;</p><ol><li>Lorem uno.<ol><li>Lorem hijo 1.</li><li>Lorem hijo 2.</li></ol></li><li>Lorem dos.</li><li>Lorem tres</li></ol><p>&nbsp;</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}

export default App;
