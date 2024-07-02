
"use client";

import { Footer } from "flowbite-react";

export function Component() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Recipe" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Community</Footer.Link>
        <Footer.Link href="#">Meal Planner</Footer.Link>
        <Footer.Link href="#">Search</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
