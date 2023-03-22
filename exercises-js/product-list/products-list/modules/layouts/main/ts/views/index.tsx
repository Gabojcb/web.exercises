import * as React from "react";
import { Menu } from "products-list/menu";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "beyond-layout-children": any;
    }
  }
}

export /*bundle*/ function Layout() {
  return (
    <main>
      <Menu />
      <beyond-layout-children />
    </main>
  );
}
