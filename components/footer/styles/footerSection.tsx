/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import styles from "./footer.module.css"

interface FooterProps {
  className?: string
}

const queryClient = new QueryClient()

const FooterSection = ({ className = "" }: FooterProps): ReactNode => {
  return (
    <QueryClientProvider client={queryClient}>
      <section
        className={`${styles.footer} ${styles["footer-with-blog"]} ${className}`}
      >
        <div className="w-layout-blockcontainer w-container container">
          <div className={styles["footer-inner"]}>
            <div className={styles["footer-top-row"]}>
              <div className={styles["footer-logo-col"]}>
                <a
                  href="/"
                  aria-current="page"
                  className={`${styles["footer-logo"]} w-inline-block w--current`}
                >
                  <img
                    width="101"
                    height="34"
                    alt="ChainGPT Labs Logo"
                    src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/665d8652487219cd00474e6a_logo-cgpt-labs-mono.svg"
                    loading="lazy"
                    className={styles["footer-logo-image"]}
                  />
                </a>
              </div>
              <div className={styles["footer-form-col"]}>
                <div className={`${styles["subscribe-form-block"]} w-form`}>
                  <form
                    id="wf-form-Subscription-Form"
                    name="wf-form-Subscription-Form"
                    data-name="Subscription Form"
                    method="get"
                    className={styles["subscribe-form"]}
                    data-wf-page-id="664753c2515af09bef5b982d"
                    data-wf-element-id="12b1a94f-b7e6-6348-f4f8-87d2cb0ec46f"
                    aria-label="Subscription Form"
                  >
                    <div className={styles["subscribe-input-col"]}>
                      <h3 className={styles["subscribe-heading"]}>
                        Subscribe to be in touch*
                      </h3>
                      <div className={styles["subscribe-row"]}>
                        <label htmlFor="email-2" className="visually-hidden">
                          Your e-mail
                        </label>
                        <input
                          className={`${styles["subscribe-input-field"]} w-input`}
                          maxLength={256}
                          name="email-2"
                          data-name="Email 2"
                          placeholder="Your e-mail"
                          type="email"
                          id="email-2"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles["subscribe-action-col"]}>
                      <div className={styles["subscribe-note"]}>
                        *Only valuable resources
                      </div>
                      <div className="button-primary subscrube-submit">
                        <div className="button-primary-border">
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="submit-button button-primary-text w-button"
                            value="SUBSCRIBE"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div
                    className={`${styles["success-message"]} w-form-done`}
                    tabIndex={-1}
                    aria-label="Subscription Form success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className={`${styles["error-message"]} w-form-fail`}
                    tabIndex={-1}
                    aria-label="Subscription Form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["footer-nav-row"]}>
              <div className={styles["footer-nav-col"]}>
                <h4 className={styles["footer-nav-title"]}>ECOSYSTEM</h4>
                <ul className={styles["footer-nav"]}>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="https://app.chaingpt.org/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles["footer-nav-link"]}
                    >
                      ChainGPT AI
                    </a>
                  </li>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="https://pad.chaingpt.org/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles["footer-nav-link"]}
                    >
                      ChainGPT Pad
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`${styles["footer-nav-col"]} fnc-second`}>
                <h4 className={styles["footer-nav-title"]}>Quick Links</h4>
                <ul className={styles["footer-nav"]}>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="https://labs.chaingpt.org/"
                      className={styles["footer-nav-link"]}
                    >
                      Home
                    </a>
                  </li>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="https://labs.chaingpt.org/apply"
                      className={styles["footer-nav-link"]}
                    >
                      Apply Now
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-nav-col"]}>
                <h4 className={styles["footer-nav-title"]}>LEGAL</h4>
                <ul className={styles["footer-nav"]}>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="/privacy-policy"
                      className={styles["footer-nav-link"]}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="/cookie-policy"
                      className={styles["footer-nav-link"]}
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li className={styles["footer-nav-item"]}>
                    <a
                      href="/terms-of-service"
                      className={styles["footer-nav-link"]}
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-nav-col"]}>
                <ul className={styles["footer-socials"]}>
                  <li className={styles["footer-socials-item"]}>
                    <a
                      href="https://t.me/chaingpt"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles["footer-socials-link"]} w-inline-block`}
                    >
                      <div>TELEGRAM</div>
                      <img
                        width="10"
                        height="10"
                        alt=""
                        src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/666b0c9d91a9791aaf3160bc_arrow-extLink.svg"
                        loading="lazy"
                        className={styles["footer-socials-ico"]}
                      />
                    </a>
                  </li>
                  <li className={styles["footer-socials-item"]}>
                    <a
                      href="https://x.com/ChainGPT_Labs"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles["footer-socials-link"]} w-inline-block`}
                    >
                      <div>X/TWITTER</div>
                      <img
                        width="10"
                        height="10"
                        alt=""
                        src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/666b0c9d91a9791aaf3160bc_arrow-extLink.svg"
                        loading="lazy"
                        className={styles["footer-socials-ico"]}
                      />
                    </a>
                  </li>
                  <li className={styles["footer-socials-item"]}>
                    <a
                      href="https://www.linkedin.com/company/103925830/"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles["footer-socials-link"]} w-inline-block`}
                    >
                      <div>LINKEDIN</div>
                      <img
                        width="10"
                        height="10"
                        alt=""
                        src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/666b0c9d91a9791aaf3160bc_arrow-extLink.svg"
                        loading="lazy"
                        className={styles["footer-socials-ico"]}
                      />
                    </a>
                  </li>
                  <li className={styles["footer-socials-item"]}>
                    <a
                      href="https://medium.com/@chaingpt"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles["footer-socials-link"]} w-inline-block`}
                    >
                      <div>MEDIUM</div>
                      <img
                        width="10"
                        height="10"
                        alt=""
                        src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/666b0c9d91a9791aaf3160bc_arrow-extLink.svg"
                        loading="lazy"
                        className={styles["footer-socials-ico"]}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["footer-copy-row"]}>
              <div className={styles["footer-copy-col"]}>
                <div className={styles["footer-copyright"]}>
                  <div className={styles["copyright-year"]}>© 2024</div>
                  <div className="copyright-text">
                    All rights reserved by ChainGPTlabs.org.
                  </div>
                </div>
              </div>
              <div className="footer-label-col hidden">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/664753c2515af09bef5b9826/665e9da88344a81671272c52_btn-product-hunt.svg"
                  alt=""
                  className="product-hunt"
                />
              </div>
            </div>
            <div className={styles["footer-bottom"]}>
              <div
                className={`${styles["footer-decor"]} ${styles["fd-top-left"]}`}
              />
              <div
                className={`${styles["footer-decor"]} ${styles["fd-top-right"]}`}
              />
              <div
                className={`${styles["footer-decor"]} ${styles["fd-bottom-left"]}`}
              />
              <div
                className={`${styles["footer-decor"]} ${styles["fd-bottom-right"]}`}
              />
              <div
                className={`${styles["footer-bottom-divider"]} ${styles["fbd-left"]}`}
              />
              <div
                className={`${styles["footer-bottom-divider"]} ${styles["fbd-middle"]}`}
              />
              <div
                className={`${styles["footer-bottom-divider"]} ${styles["fbd-right"]}`}
              />
              <div id="3d-footer" className="webgl-wrapper" />
            </div>
          </div>
        </div>
        <div className={styles["footer-bottom-gape"]} />
      </section>
    </QueryClientProvider>
  )
}

export default FooterSection
