const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "",
  description:
    "",
};

// default open graph data
const og = {
  title: "",
  description: "",
  type: "",
  image: ""
};

// default schema data
const schema = {
  logo: "",
  type: "",
  name: "",
  description: "",
  email: "",
};

// social links
const social = {
  twitter: "",
  linkedin: "",
  discord: "",
};

export { baseURL, style, meta, og, schema, social };
