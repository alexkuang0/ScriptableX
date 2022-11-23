const ScriptableX = {
  createElement(type: ElementType, attrs, ...children) {
    return "Hello World!";
  },
  render(el) {
    console.log(el);
  },
};

export { ScriptableX };
