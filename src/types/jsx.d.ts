declare namespace JSX {
  interface IntrinsicElements {
    'hana-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url?: string;
      },
      HTMLElement
    >;
  }
}
