import flex from "@reflexjs/preset-flex"

export default {
  preset: flex,
  colors: {
    primary: "red",
    secondary: "#02a27f",
    muted: "#fef9f3",
    heading: "#554d46",
    text: "#554d46",
    border: "554d46",
    modes: {
      dark: {
        background: "#141414",
        muted: "#181817",
        heading: "#fef9f3",
        text: "#fef9f3",
      }
    }
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      }
    },
    root: {
      scrollBehavior: "smooth",
    }
  },
}