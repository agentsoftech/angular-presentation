declare const monaco: any;

export function replay(editor: any) {
  const keys = [];
  editor.addCommand(monaco.KeyCode.F9, () => {
    debugger;
    console.log('starting recording');
    editor.onKeyDown((key) => {
      debugger;
      keys.push({
        timestamp: new Date(),
        key

      })
    });
    editor.trigger('keyboard', 'type', {text: 'test'});
    editor.trigger('keyboard', monaco.editor.Handler.CursorLeft);
  });
  editor.addCommand(monaco.KeyCode.F8, () => {
    console.log(keys)
  });

}
