(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    520: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => s });
      let s = {
        src: "./_next/static/media/banner1.343ee3cd.webp",
        height: 600,
        width: 1400,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAMAAkA4JYwCdAEO+mL4AAD9/QUrZmPv9KzudSF+GCyOw36SSJk5ZEkI5oECjbH2VRiUAAA=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    1511: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => s });
      let s = {
        src: "./_next/static/media/commercial.a8a0b47e.webp",
        height: 600,
        width: 1400,
        blurDataURL:
          "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAMAAkA4JQBOgB6QNkwAAPwvDrruzAKGIb2EODDaqWSh6Wj3pa4a5Tc6IAAA",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    1539: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => k });
      var s = i(7876),
        a = i(7328),
        r = i.n(a),
        n = i(4232),
        A = i(2277);
      let o = {
          src: "./_next/static/media/int-1.ba74eb3e.webp",
          height: 1104,
          width: 736,
          blurDataURL:
            "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoFAAgAAkA4JaACdAD0eqr5AAD+81T2Gx30Qb/bm7JWZt4C6goZvw6U9+ZBsNAuXRh9HeWTcHydsjG2hrwAAA==",
          blurWidth: 5,
          blurHeight: 8,
        },
        l = {
          src: "./_next/static/media/int-2.932d9345.webp",
          height: 1536,
          width: 1024,
          blurDataURL:
            "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoFAAgAAkA4JQBOgCHhznDAAP7b4JNtewHsjFkFfW84um4hprSaranWo4PNJWEHlIc1lFImwAA=",
          blurWidth: 5,
          blurHeight: 8,
        },
        d = {
          src: "./_next/static/media/int-3.8158b34f.webp",
          height: 1104,
          width: 736,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoFAAgAAkA4JZgCdLoAArrmNtoAAP5qC3IUFJDtWijCWckpiFjq0KH+L6N+wTyOcs9fAU4C9I/FJ5ptRdw0X8IAAAA=",
          blurWidth: 5,
          blurHeight: 8,
        },
        c = {
          src: "./_next/static/media/fisheye_BW_logo.719176c6.png",
          height: 1080,
          width: 1080,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXH4+Pj9/f3+/v79/fz///////8OkpJlAAAAB3RSTlMALV1ATx4NZPcmaAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACJJREFUeJxjYMACGJmYGWEMZhDNxsLEwsIGYrEyMrJi0wIAB0sANxSeFbgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        };
      var h = i(1755),
        m = i(625),
        g = i(4587),
        u = i.n(g);
      function x(e) {
        let { end: t } = e,
          { ref: i, inView: a } = (0, m.Wx)({
            triggerOnce: !1,
            threshold: 0.2,
          }),
          { number: r } = (0, h.zh)({
            from: { number: 0 },
            to: { number: a ? t : 0 },
            reset: !a,
            delay: 100,
            config: { mass: 1, tension: 20, friction: 10 },
          });
        return (0, s.jsxs)("span", {
          ref: i,
          className: "stats-number",
          children: [
            (0, s.jsx)(h.CS.span, { children: r.to((e) => e.toFixed(0)) }),
            "+",
          ],
        });
      }
      let p = () =>
        (0, s.jsx)("section", {
          className: "content",
          children: (0, s.jsxs)("div", {
            className: "content-container",
            children: [
              (0, s.jsxs)("div", {
                className: "image-gallery",
                children: [
                  (0, s.jsx)("div", {
                    "data-aos": "fade-up-right",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "100",
                    className: "gallery-item",
                    children: (0, s.jsx)(u(), {
                      src: o,
                      alt: "Artistic Living Room",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    "data-aos": "fade-up",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "100",
                    className: "gallery-item1",
                    children: (0, s.jsx)(u(), {
                      src: l,
                      alt: "Modern Living Space",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    "data-aos": "fade-up-left",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "100",
                    className: "gallery-item2",
                    children: (0, s.jsx)(u(), {
                      src: d,
                      alt: "Luxury Bathroom",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "about-section",
                children: [
                  (0, s.jsx)("h1", {
                    "data-aos": "fade-up-right",
                    "data-aos-duration": "1000",
                    className: "about-heading",
                    children: "ABOUT US",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(u(), {
                        src: c,
                        alt: "fisheye black and white logo",
                        className: "about_fisheyelogo",
                      }),
                      (0, s.jsx)("h4", {
                        className: "about-fisheye",
                        children: "FISH EYE INTERIORS",
                      }),
                      (0, s.jsx)("p", {
                        "data-aos": "fade-up-left",
                        "data-aos-duration": "1000",
                        className: "about-text",
                        children:
                          "Where Creativity Meets Comfort. Aura Spaces Transforms Homes, Offices, And Commercial Areas Into Stunning, Functional Environments Tailored To Your Style And Needs. From Modern Minimalism To Timeless Elegance, We Bring Your Vision To Life With Thoughtful Design And Expert Execution.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "stats-container",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "stat-block",
                        children: [
                          (0, s.jsx)(x, { end: 6 }),
                          (0, s.jsx)("div", {
                            className: "stat-label",
                            children: "Years Experience",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "stat-block",
                        children: [
                          (0, s.jsx)(x, { end: 100 }),
                          (0, s.jsx)("div", {
                            className: "stat-label",
                            children: "Completed Projects",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "stat-block",
                        children: [
                          (0, s.jsx)(x, { end: 40 }),
                          (0, s.jsx)("div", {
                            className: "stat-label",
                            children: "Client Reviews",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      var b = i(9038),
        j = i(6356),
        w = i(4227);
      let v = {
          src: "./_next/static/media/Lborder.75a27c4c.png",
          height: 59,
          width: 59,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEUAAABMaXEAAAAAAAAAAABIdVvnAAAABXRSTlMhAAECO7w14ZQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAbSURBVHicY2BhgAFGJkYQYGBgZGYCAWQRggwACV0AQ/O19owAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "./_next/static/media/LborderW.3be55f51.png",
          height: 59,
          width: 59,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEX///9MaXH///////////9badqkAAAABXRSTlMhAAECO7w14ZQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAbSURBVHicY2BhgAFGJkYQYGBgZGYCAWQRggwACV0AQ/O19owAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        C = {
          src: "./_next/static/media/RborderW.3e65310b.png",
          height: 67,
          width: 67,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEVMaXHl5eW/v7+P468PAAAAA3RSTlMAHhLdjopJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNggABGKE0kg4kRAhiYoAAAAgYAILKsbisAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = {
          src: "./_next/static/media/RborderH.763e6d49.png",
          height: 59,
          width: 59,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEUAAABMaXEAAAAAAAAAAABIdVvnAAAABXRSTlMiAAIEO6+JgpsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicY2AEASZGBgZiGEwgwIwsAgUsAAnDAEPCrcFcAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        R = [
          {
            image: {
              src: "./_next/static/media/Design.d940643e.png",
              height: 419,
              width: 564,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEW0u8JKWFmcoad5gYOqsLWstb2UlpW7wMUJDxGDjZJ1eHWHf3WQjYh7cWCCalhveXsnNTRXVU4/NDAgJiNXTUCjqKoDCF6PAAAACnRSTlP9/////////fz9XZz1/gAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwFwYcBgDAMwDCnzegewP+3IlFdRU4pHNnfvM9L3r5mX40wkql3NIHlOogItA1+LWIBfdtacNoAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            icon: (0, s.jsx)(j.tmR, {}),
            title: "Design",
            desc: "We deliver a value for the dream of clients by our design to make a spacious shelter..",
          },
          {
            image: {
              src: "./_next/static/media/Planningimg.e07eff32.png",
              height: 419,
              width: 564,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEWDjJNlZF1VVlZycGp1a1eUjn2pr7SLj49OT09neINMR0FYX12DgnlmanCTmZ4cHiKCiIdJUVZ+gYWhpatdTjyfqbQ4MCg4ODiaoqRSPSFD7lBdAAAACnRSTlP+/////v7//vv1A0sURAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwFwQcCgDAIALEDlFa63OP/HzUhSYjVFV7r7k5iju5H2ivT4KI14R751LIV8hOfqS4/LPoBz9yVer4AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            icon: (0, s.jsx)(b.wwX, {}),
            title: "Planning",
            desc: "We plan the accurate project needs perfectly to make it identity to your imagination.",
          },
          {
            image: {
              src: "./_next/static/media/Architecture.fd978aa7.png",
              height: 419,
              width: 564,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEWYnaGUkI+kqauztLWurq+3urumo6OChYpfV1R4WkuBc2t3en5xdn1pX1vuMmTSAAAAA3RSTlP9/PxLaDTbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nBXGyREAIAwCQCKQxKv/dh33teAnDZCWaEOOvnMlUuj+wamKpIDaw0Y8F/0A7BY89XoAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            icon: (0, s.jsx)(w.aHi, {}),
            title: "Architecture",
            desc: "As an architect we design for the present, with an awareness of the past, for the future expectation..",
          },
          {
            image: {
              src: "./_next/static/media/Construction.cbb8b8a0.png",
              height: 419,
              width: 564,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAUVBMVEXCqJvi39yDZVmvmZGkj4bEta9WS01GODzd1dDqxKqvinK6o5luYF5pVlOXg3hNQEDKrpuPdnGghWq7rahxaWviz8DMw8HJrIiMiIHyzrWqlY2DjDX/AAAACnRSTlP+/////////Pz1ubKs+AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwFwQcCgCAMBLBr6UCmi+H/P2oCnAmRKCLg0vVMgmSR+7UNDTqS94bCnJvXD27VSufjBy3iAc7NROSJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            icon: (0, s.jsx)(j.$4c, {}),
            title: "Construction",
            desc: "We build a structure to your dream with a unique design, by focusing on quality..",
          },
        ],
        U = () =>
          (0, s.jsx)("div", {
            className: "content-two-bg",
            children: (0, s.jsx)("div", {
              className: "contenttwo-bg",
              children: (0, s.jsxs)("div", {
                className: "contenttwo-wrapper",
                children: [
                  (0, s.jsx)("h2", {
                    className: "contenttwo-title",
                    children: "WHAT WE DO ?",
                  }),
                  (0, s.jsx)("p", {
                    className: "contenttwo-desc",
                    children:
                      "Fisheye Interior & Construction is a professional firm offering comprehensive services in interiors, construction, and consulting with a focus on quality and timely project completion. As leading interior designers Coimbatore, we deliver innovative interior design services, customized interiors, modular kitchen designs, and commercial and residential interior decoration. Our expertise extends to affordable interior design solutions, modern home interiors, and top interior decorators in coimbatore.",
                  }),
                  (0, s.jsx)("div", {
                    className: "contenttwo-card-row",
                    children: R.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "contenttwo-card",
                          children: [
                            (0, s.jsx)(u(), {
                              src: e.image,
                              alt: e.title,
                              className: "card-img",
                            }),
                            (0, s.jsx)(u(), {
                              src: f,
                              alt: "",
                              className: "Lborder",
                            }),
                            (0, s.jsx)(u(), {
                              src: C,
                              alt: "",
                              className: "Rborder",
                            }),
                            (0, s.jsxs)("div", {
                              className: "card-hover-content",
                              children: [
                                (0, s.jsx)(u(), {
                                  src: v,
                                  alt: "",
                                  className: "LborderH",
                                }),
                                (0, s.jsx)("span", {
                                  className: "card-hover-icon",
                                  children: e.icon,
                                }),
                                (0, s.jsx)("h4", {
                                  className: "card-hover-title",
                                  children: e.title,
                                }),
                                (0, s.jsx)("p", {
                                  className: "card-hover-desc",
                                  children: e.desc,
                                }),
                                (0, s.jsx)(u(), {
                                  src: N,
                                  alt: "",
                                  className: "RborderH",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "card-bottom-bar",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "card-bottom-icon",
                                  children: e.icon,
                                }),
                                (0, s.jsx)("span", {
                                  className: "card-bottom-title",
                                  children: e.title,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
      var E = i(7250);
      let y = {
          src: "./_next/static/media/Vector 4.ae3ad1c3.png",
          height: 2501,
          width: 3291,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAPFBMVEWlnJNwVj+miXJaOB60nonXzb21ppLZ08h3TzKdg3KuloTCq5jy9PTZ18yukXjEvbRfOyOgiHfm3tGfkoSJcb9PAAAADnRSTlMB8c+Hif38+o6R7/5/iVw/IN8AAAAJcEhZcwAAITgAACE4AUWWMWAAAAAsSURBVHicY2Bn5xMQ5ObjYmDlZ2Lm5OTgYGAXYmEAAzZWKINRmBfKYOMBMwAj0QD8joBqHAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        },
        I = () => {
          let [e, t] = (0, n.useState)(0),
            i = [
              [
                {
                  id: 1,
                  text: "Exceptional Work! From The Initial Consultation To The Final Reveal, Your Team Signify Professionalism .",
                  name: "Sophie Carter",
                  position: "Designer",
                },
                {
                  id: 2,
                  text: "Exceptional Work! From The Initial Consultation To The Final Reveal, Your Team Signify Professionalism.",
                  name: "James Bennett",
                  position: "Product Manager",
                },
              ],
              [
                {
                  id: 3,
                  text: "The Attention To Detail And Creative Solutions Provided Were Outstanding. Highly Recommend Their Services.",
                  name: "Emily Rodriguez",
                  position: "Architect",
                },
                {
                  id: 4,
                  text: "Professional Team With Great Vision. They Transformed Our Space Beyond Our Wildest Dreams.",
                  name: "Michael Johnson",
                  position: "Business Owner",
                },
              ],
              [
                {
                  id: 5,
                  text: "Quality Craftsmanship And Excellent Customer Service. The Project Was Completed On Time And Budget.",
                  name: "Sarah Williams",
                  position: "Interior Stylist",
                },
                {
                  id: 6,
                  text: "Amazing Results! The Team Understood Our Vision Perfectly And Delivered Beyond Expectations.",
                  name: "David Chen",
                  position: "Homeowner",
                },
              ],
            ],
            a = i.length;
          return (0, s.jsx)("section", {
            className: "content-four",
            children: (0, s.jsxs)("div", {
              className: "testimonials-wrapper",
              children: [
                (0, s.jsx)("div", {
                  "data-aos": "flip-left",
                  "data-aos-easing": "ease-out-cubic",
                  "data-aos-duration": "2000",
                  className: "section-header",
                  children: (0, s.jsxs)("h3", {
                    className: "section-title",
                    children: [
                      "What People Think",
                      (0, s.jsx)("br", {}),
                      "About Us",
                    ],
                  }),
                }),
                (0, s.jsx)(u(), { src: y, alt: "", className: "curvelogo" }),
                (0, s.jsx)("div", {
                  "data-aos": "fade-up-left",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "100",
                  className: "testimonials-grid",
                  children: i[e].map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: "testimonial-card",
                        children: [
                          (0, s.jsx)("div", {
                            className: "quote-icons",
                            children: (0, s.jsx)(E.TRU, {
                              className: "quote-icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "testimonial-text",
                            children: e.text,
                          }),
                          (0, s.jsxs)("div", {
                            className: "testimonial-author",
                            children: [
                              (0, s.jsxs)("h4", {
                                className: "author-name",
                                children: [e.name, "  "],
                              }),
                              (0, s.jsxs)("p", {
                                className: "author-position",
                                children: [
                                  e.position,
                                  " ",
                                  (0, s.jsxs)("span", {
                                    className: "star",
                                    children: [
                                      "  ",
                                      (0, s.jsx)(b.gt3, {}),
                                      "  ",
                                      (0, s.jsx)(b.gt3, {}),
                                      "  ",
                                      (0, s.jsx)(b.gt3, {}),
                                      "  ",
                                      (0, s.jsx)(b.gt3, {}),
                                      "  ",
                                      (0, s.jsx)(b.gt3, {}),
                                      " ",
                                    ],
                                  }),
                                  " ",
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "quote-icons-r",
                            children: (0, s.jsx)(E.m1n, {
                              className: "quote-icon-r",
                            }),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: "navigation-controls",
                  children: [
                    (0, s.jsx)("button", {
                      className: "nav-button prev-button",
                      onClick: () => {
                        t((e) => (e - 1 + a) % a);
                      },
                      "aria-label": "Previous testimonials",
                      children: (0, s.jsx)(b._Jj, {}),
                    }),
                    (0, s.jsx)("button", {
                      className: "nav-button next-button",
                      onClick: () => {
                        t((e) => (e + 1) % a);
                      },
                      "aria-label": "Next testimonials",
                      children: (0, s.jsx)(b.X6T, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var B = i(2916),
        S = i(8720);
      let D = () => {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          a = (0, n.useRef)(null),
          [r, A] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              A(window.scrollY > 0);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, n.useEffect)(() => {
            let t = document.getElementById("preloader");
            setTimeout(() => {
              t && (t.style.display = "none");
            }, 4e3);
            let i = e.current;
            i &&
              (document.body.classList.add("overflow-hidden"),
              document.documentElement.classList.add("overflow-hidden"),
              setTimeout(() => {
                (i.style.width = "90%"),
                  (i.style.height = "90%"),
                  (i.style.transform = "translate(-50%, -50%)"),
                  (i.style.top = "50%"),
                  (i.style.left = "50%"),
                  (i.style.position = "fixed"),
                  (i.style.borderRadius = "12px");
              }, 2e3),
              setTimeout(() => {
                window.matchMedia("(max-width: 576px)").matches
                  ? Object.assign(i.style, {
                      width: "220px",
                      height: "220px",
                      top: "30%",
                      left: "22%",
                      right: "auto",
                      transform: "translate(0%, -25%)",
                    })
                  : window.matchMedia("(max-width: 768px)").matches
                  ? Object.assign(i.style, {
                      width: "380px",
                      height: "380px",
                      top: "40%",
                      left: "25%",
                      transform: "translate(0%, -50%)",
                    })
                  : window.matchMedia("(max-width: 991px)").matches
                  ? Object.assign(i.style, {
                      width: "380px",
                      height: "380px",
                      left: "25%",
                      top: "35%",
                      right: "0px",
                      transform: "translate(0%, -50%)",
                    })
                  : window.matchMedia("(max-width: 1199px)").matches
                  ? Object.assign(i.style, {
                      width: "400px",
                      height: "400px",
                      left: "auto",
                      right: "60px",
                      transform: "translate(0%, -50%)",
                    })
                  : window.matchMedia("(max-width: 1399px)").matches
                  ? Object.assign(i.style, {
                      width: "450px",
                      height: "450px",
                      left: "auto",
                      right: "80px",
                      transform: "translate(0%, -50%)",
                    })
                  : Object.assign(i.style, {
                      width: "500px",
                      height: "500px",
                      top: "50%",
                      left: "auto",
                      right: "100px",
                      transform: "translate(0%, -50%)",
                      position: "absolute",
                    }),
                  document.body.classList.remove("overflow-hidden"),
                  document.documentElement.classList.remove("overflow-hidden");
              }, 3e3));
          }, []),
          (0, n.useEffect)(() => {
            let e,
              s = new B.A({
                duration: 1.2,
                easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                smoothWheel: !0,
                smoothTouch: !1,
              });
            return (
              (t.current = s),
              requestAnimationFrame(function e(t) {
                s.raf(t), requestAnimationFrame(e);
              }),
              (async () => {
                let t = (await i.e(605).then(i.t.bind(i, 4605, 23))).default;
                (a.current = e = new t.Controller()),
                  new t.Scene({
                    triggerElement: "#section2",
                    triggerHook: "onEnter",
                    duration: "100%",
                  })
                    .setPin("#section1 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e),
                  new t.Scene({
                    triggerElement: "#section2",
                    triggerHook: "onEnter",
                    duration: "200%",
                  })
                    .setPin("#section2 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e),
                  new t.Scene({
                    triggerElement: "#section3",
                    triggerHook: "onEnter",
                    duration: "200%",
                  })
                    .setPin("#section3 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e),
                  new t.Scene({
                    triggerElement: "#section4",
                    triggerHook: "onEnter",
                    duration: "400%",
                  })
                    .setPin("#section4 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e),
                  new t.Scene({
                    triggerElement: "#section5",
                    triggerHook: "onEnter",
                    duration: "400%",
                  })
                    .setPin("#section5 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e),
                  new t.Scene({
                    triggerElement: "#section6",
                    triggerHook: "onEnter",
                    duration: "100%",
                  })
                    .setPin("#section6 .pinWrapper", { pushFollowers: !1 })
                    .addTo(e);
              })(),
              () => {
                null == e || e.destroy(!0);
              }
            );
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("section", {
              className: "events-page",
              children: [
                (0, s.jsxs)("div", {
                  id: "section1",
                  className: "event home-content-div",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "pinWrapper",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "text",
                          children: [
                            (0, s.jsx)("h2", { children: "CONSTRUCTION" }),
                            (0, s.jsx)("p", {
                              children:
                                "Fisheye Interiors, Coimbatore’s trusted firm with 6+ years expertise, delivers innovative construction and elegant interior design solutions for modern living.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "image",
                          id: "loaderVideo",
                          ref: e,
                          children: (0, s.jsx)(u(), {
                            src: S.A,
                            alt: "Construction",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "scrollBtn ".concat(r ? "move" : ""),
                      children: [
                        (0, s.jsx)("h6", { children: "scroll" }),
                        (0, s.jsx)("span", {}),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  id: "section2",
                  className: "event home-content-div",
                  children: (0, s.jsxs)("div", {
                    className: "pinWrapper",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, s.jsx)("h2", { children: "Commercial " }),
                          (0, s.jsx)("p", {
                            children:
                              "Fisheye Interiors, top interior designers in Coimbatore, deliver modern home interiors, functional residential spaces, and commercial designs that boost success, style, and productivity. ",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "image" }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  id: "section3",
                  className: "event home-content-div",
                  children: (0, s.jsxs)("div", {
                    className: "pinWrapper",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, s.jsx)("h2", { children: "Crafting Home" }),
                          (0, s.jsx)("p", {
                            children:
                              "Fisheye Interiors, top interior designers in Coimbatore, craft stylish and comfortable homes with customized interiors, modular kitchens, bedroom and living room designs for modern living",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "image" }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  id: "section4",
                  className: "event home-content-div",
                  children: (0, s.jsxs)("div", {
                    className: "pinWrapper",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, s.jsx)("h2", {
                            children: "Kitchen Interior Design",
                          }),
                          (0, s.jsx)("p", {
                            children:
                              "Fisheye Interiors offers stylish modular kitchen designs in Coimbatore with smart storage, easy maintenance, and modern aesthetics. Trusted interior designers for durable, functional, and elegant kitchens.",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "image" }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  id: "section5",
                  className: "event home-content-div",
                  children: (0, s.jsxs)("div", {
                    className: "pinWrapper",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, s.jsx)("h2", { children: "Bathroom Interior" }),
                          (0, s.jsx)("p", {
                            children:
                              "Transform your bathroom with Fisheye Interiors, Coimbatore’s trusted interior designers. We offer affordable bathroom renovation, modern interiors, and expert design solutions.",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "image" }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  id: "section6",
                  className: "event home-content-div",
                  children: (0, s.jsxs)("div", {
                    className: "pinWrapper",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text",
                        children: [
                          (0, s.jsx)("h2", {
                            children: "Office Interior Design",
                          }),
                          (0, s.jsx)("p", {
                            children:
                              "Fisheye Interiors provides expert office interior design in Coimbatore, creating modern, functional, and inspiring workspaces. Trusted office interior designers in Coimbatore for customized solutions",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "image" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      var T = i(8466),
        W = i(2806);
      let k = () => {
        let e = (0, n.useRef)(null);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)(r(), {
              children: [
                (0, s.jsx)("title", {
                  children:
                    "Best Interior Designers in Coimbatore | Fisheye interiors",
                }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    "Looking for the Best Interior Designers in Coimbatore? Fisheye interiors is a leading and 6+ Years Experienced Interior Decorators in Coimbatore.",
                  "data-react-helmet": "true",
                }),
                (0, s.jsx)("meta", {
                  name: "keywords",
                  content:
                    "interior designers Coimbatore, best interior designers, home interior decorators, modular kitchen designs, interior decoration, customized interiors, living room design, bedroom interiors, interior designers India, affordable interior design, modern home interiors, interior design services, top interior decorators, residential interior design, interior design company",
                }),
                (0, s.jsx)("meta", {
                  property: "og:title",
                  content:
                    "Best Interior Designers in Coimbatore | Fisheye Interiors",
                }),
                (0, s.jsx)("meta", { property: "og:type", content: "website" }),
                (0, s.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://fisheye-interior.com/assets/images/homepage-og-image.jpg",
                }),
                (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "https://fisheye-interior.com",
                }),
                (0, s.jsx)("meta", { property: "og:locale", content: "en_IN" }),
                (0, s.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Looking for the Best Interior Designers in Coimbatore? Fisheye Interiors is a leading and 6+ Years Experienced Interior Decorators in Coimbatore.",
                }),
                (0, s.jsx)("meta", {
                  property: "og:site_name",
                  content: "Fisheye Interiors",
                }),
                (0, s.jsx)("link", { rel: "icon", href: "/logo.png" }),
              ],
            }),
            (0, s.jsx)(A.A, {
              handleScrollTo: (t) => {
                "about" === t &&
                  e.current &&
                  e.current.scrollIntoView({ behavior: "smooth" });
              },
            }),
            (0, s.jsxs)("div", {
              className: "home_margin",
              children: [
                (0, s.jsx)(D, {}),
                (0, s.jsx)("div", { ref: e, children: (0, s.jsx)(p, {}) }),
                (0, s.jsx)("div", { children: (0, s.jsx)(U, {}) }),
                (0, s.jsx)(T.A, {}),
                (0, s.jsx)(I, {}),
                (0, s.jsx)(W.A, {}),
              ],
            }),
          ],
        });
      };
    },
    2277: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => c });
      var s = i(7876),
        a = i(4232),
        r = i(9038),
        n = i(8230),
        A = i.n(n);
      let o = {
        src: "./_next/static/media/interior logo_png.ef0a2185.png",
        height: 500,
        width: 500,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVPSklOUFAmsOeNyIgtqOJHXGVOTk5/lpMxrN01n8gxquJUuL+Ry5FrvaVtvaKn0W5PUVFPT0+by3c3sdwtqeBhua1mvLBDiaLcAAAAF3RSTlMbbg4mGC4OAns4RSsWSFFEd1pxUmtrpsBmAWwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicBcEHAsAgCACxU0HA2f3/pzbBxt7FzCjX66uvIFo8Mj/BertnGZkT1SxZSEdK7u5UFI0QrFIB+wFTtgHukzuJgwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      var l = i(4587),
        d = i.n(l);
      let c = (e) => {
        let { handleScrollTo: t } = e,
          [i, n] = (0, a.useState)(!1);
        return (0, s.jsx)("div", {
          className: "navbar-head",
          children: (0, s.jsx)("nav", {
            className: "navbar",
            children: (0, s.jsxs)("div", {
              className: "navbar-content",
              children: [
                (0, s.jsx)(A(), {
                  href: "/",
                  children: (0, s.jsx)("div", {
                    className: "logo",
                    children: (0, s.jsx)(d(), {
                      src: o,
                      alt: "Logo",
                      width: 100,
                      height: 50,
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "nav-links".concat(i ? " open" : ""),
                  children: [
                    (0, s.jsx)(A(), {
                      href: "/",
                      children: (0, s.jsx)("span", {
                        onClick: () => {
                          t && t("home"), n(!1);
                        },
                        children: "Home",
                      }),
                    }),
                    (0, s.jsx)(A(), {
                      href: "/about_us",
                      children: (0, s.jsx)("span", { children: "About us" }),
                    }),
                    (0, s.jsx)(A(), {
                      href: "/gallery",
                      children: (0, s.jsx)("span", { children: "Gallery" }),
                    }),
                    (0, s.jsx)(A(), {
                      href: "/constinterio",
                      children: (0, s.jsx)("span", {
                        children: "Constinterio",
                      }),
                    }),
                    (0, s.jsx)(A(), {
                      href: "/contact_us",
                      children: (0, s.jsx)("span", { children: "Contact us" }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "menu-toggle",
                  onClick: () => n(!i),
                  children: i ? (0, s.jsx)(r.QCr, {}) : (0, s.jsx)(r.OXb, {}),
                }),
              ],
            }),
          }),
        });
      };
    },
    2806: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => a });
      var s = i(7876);
      i(4232);
      let a = () =>
        (0, s.jsxs)("div", {
          className: "Letstalk-container",
          children: [
            (0, s.jsxs)("div", {
              className: "talk-title",
              children: [
                (0, s.jsx)("h4", { children: "Let's Talk About" }),
                (0, s.jsx)("h4", { children: "Your Dream project?" }),
                (0, s.jsx)("p", {
                  children:
                    "Schedule a free project consulting with one of our expert developer today!",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "Lets-button",
              children: (0, s.jsx)("button", {
                className: "lets-btn liquid",
                children: (0, s.jsx)("span", { children: "Enquiry" }),
              }),
            }),
          ],
        });
    },
    2898: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(1539);
        },
      ]);
    },
    3921: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => s });
      let s = {
        src: "./_next/static/media/kitchan.9e085ca7.webp",
        height: 600,
        width: 1400,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAQAgCdASoIAAMAAkA4JbACdLoAAzpS0rxIAP4J5D2VHF55drwCWa5fW42n+7uH0QGwM1X86w5ewsY5AAAAAA==",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    4201: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => s });
      let s = {
        src: "./_next/static/media/house.2576d03f.webp",
        height: 600,
        width: 1400,
        blurDataURL:
          "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAMAAkA4JYwCdAD0h/pcAP7ifSe6XFR2BEVozhiLmvHhAvCwwidUJvoWAAAA",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    8466: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => h });
      var s = i(7876);
      i(4232);
      var a = i(8720),
        r = i(1511),
        n = i(4201),
        A = i(3921),
        o = i(520),
        l = i(4587),
        d = i.n(l);
      let c = [
          { title: "CONSTRUCTION", image: a.A },
          { title: "COMMERCIAL", image: r.A },
          { title: "HOUSE", image: n.A },
          { title: "KITCHEN", image: A.A },
          { title: "BATHROOM", image: o.A },
          {
            title: "OFFICE",
            image: {
              src: "./_next/static/media/office.cb0ade12.webp",
              height: 600,
              width: 1400,
              blurDataURL:
                "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAMAAkA4JQBOgCPth2tsAAD+thUfQ+OboO9BKbRsELGkJ6m6+cJAnXaXSTZRRPwAAA==",
              blurWidth: 8,
              blurHeight: 3,
            },
          },
        ],
        h = () =>
          (0, s.jsxs)("div", {
            className: "projecthead",
            children: [
              (0, s.jsx)("h4", {
                "data-aos": "fade-right",
                "data-aos-duration": "1000",
                "data-aos-delay": "100",
                className: "projects-title",
                children: "OUR LATEST PROJECTS",
              }),
              (0, s.jsx)("div", {
                className: "projects-grid-section",
                children: (0, s.jsx)("div", {
                  className: "projects-grid",
                  children: c.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: "projects-grid-card ".concat(
                          t % 2 == 0 ? "up" : "down"
                        ),
                        children: [
                          (0, s.jsx)(d(), { src: e.image, alt: e.title }),
                          (0, s.jsx)("div", {
                            className: "projects-grid-title",
                            children: e.title,
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              }),
            ],
          });
    },
    8720: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => s });
      let s = {
        src: "./_next/static/media/construction.e271dcf3.webp",
        height: 752,
        width: 1336,
        blurDataURL:
          "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAUAAkA4JZQAApexCwAA/mjG1IobgA+6jx67VpiYPm82ZLK3CWN7ggAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
  },
  (e) => {
    e.O(0, [938, 241, 753, 942, 842, 132, 636, 593, 792], () =>
      e((e.s = 2898))
    ),
      (_N_E = e.O());
  },
]);
