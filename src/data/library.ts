export const library = {
  "mathematics": {
    description: "things I am learning the hard way",
    children: {
      "linear-algebra": {
        description: "vectors, spaces, echelon, linear systems",
        children: {
          "linear-systems.pdf": {
            description: "Gauss's method and linear systems",
            date: "2026-09-30",
            href: "/library/files/linear-systems.pdf"
          },

          "vector-spaces.pdf": {
            description: "vector spaces, span, and independence",
            date: "2026-10-04",
            href: "/library/files/vector-spaces.pdf"
          }
        }
      },

      "vector-calculus": {
        description: "fields, flux, circulation, and integration",
        children: {
          "greens-theorem.pdf": {
            description: "Green's theorem and orientation",
            date: "2026-09-29",
            href: "/library/files/greens-theorem.pdf"
          }
        }
      },

      "dynamical-systems": {
        description: "fixed points, flows, and bifurcations",
        children: {}
      }
    }
  },

  "computer-science": {
    description: "algorithms, models, and machine learning",
    children: {
      "algorithms": {
        description: "computers do things",
        children: {
          "raycasting.pdf": {
            description: "2D grid traversal and pseudo-3D projection",
            date: "2026-09-30",
            href: "/library/files/raycasting.pdf"
          },

          "dda.pdf": {
            description: "digital differential analyzer",
            date: "2026-10-02",
            href: "/library/files/dda.pdf"
          }
        }
      },

      "machine-learning": {
        description: "learning algorithms and representation",
        children: {}
      }
    }
  }
};