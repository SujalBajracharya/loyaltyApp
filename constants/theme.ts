const color = {
  primary: "#0E9384",
  background: "#FFFFFF",
  textDark: "#272727",
  textLight: "#606060",
};

export const theme = {
  fonts: {
    regular: "Poppins-Regular",
    bold: "Poppins-Bold",
    medium: "Poppins-Medium",
  },
  colors: {
    primary: "#0E9384",
    background: "#FFFFFF",
    textDark: "#272727",
    textLight: "#606060",
  },
  sizes: {
    l: 28,
    m: 16,
    s: 14,
  },
  buttonVariants: {
    primary: {
      container: {
        backgroundColor: color.primary,
      },
      text: {
        color: color.background,
      },
    },

    ghost: {
      container: {},
      text: {
        color: color.textDark,
      },
    },
  },
};
