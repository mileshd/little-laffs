import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/subscribe.css'

const SubscribePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Subscribe" />
      <div className="subscribe">
        <div id="mc_embed_signup">
          <form action="https://littlelaffs.us10.list-manage.com/subscribe/post?u=dc116fbba7f8fdf89516df36f&amp;id=c1cf68d85c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Subscribe</label>
              <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />

              <div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true">
                <input
                  type="text"
                  name="b_dc116fbba7f8fdf89516df36f_c1cf68d85c"
                  tabindex="-1"
                  value=""
                />
                <div className="clear"></div>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

        //<div id="mc_embed_signup">
          //<form
            //action="https://littlelaffs.us10.list-manage.com/subscribe/post?u=dc116fbba7f8fdf89516df36f&amp;id=c1cf68d85c"
            //method="post"
            //id="mc-embedded-subscribe-form"
            //name="mc-embedded-subscribe-form"
            //className="validate"
            //target="_blank"
            //novalidate
          //>
            //<div id="mc_embed_signup_scroll">
              //<label for="mce-EMAIL">Subscribe</label>
              //<input
                //type="email"
                //value=""
                //name="EMAIL"
                //className="email"
                //id="mce-EMAIL"
                //placeholder="email address"
                //required
              ///>
              //<div
                //style={{ position: 'absolute', left: '-5000px' }}
                //aria-hidden="true"
              //>
                //<input
                  //type="text"
                  //name="b_dc116fbba7f8fdf89516df36f_c1cf68d85c"
                  //tabindex="-1"
                  //value=""
                ///>
              //</div>
              //<div className="clear">
                //<input
                  //type="submit"
                  //value="Subscribe"
                  //name="subscribe"
                  //id="mc-embedded-subscribe"
                  //className="button"
                ///>
              //</div>
            //</div>
          //</form>
        //</div>
      //</div>

export default SubscribePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

        //<div id="mc_embed_signup">
          //<form
            //action="https://littlelaffs.us10.list-manage.com/subscribe/post?u=dc116fbba7f8fdf89516df36f&amp;id=c1cf68d85c"
            //method="post"
            //id="mc-embedded-subscribe-form"
            //name="mc-embedded-subscribe-form"
            //className="validate"
            //target="_blank"
            //novalidate
          //>
            //<div id="mc_embed_signup_scroll">
              //<label for="mce-EMAIL">Subscribe</label>
              //<input
                //type="email"
                //value=""
                //name="EMAIL"
                //className="email"
                //id="mce-EMAIL"
                //placeholder="email address"
                //required
              ///>
              //<div
                //style={{ position: 'absolute', left: '-5000px' }}
                //aria-hidden="true"
              //>
                //<input
                  //type="text"
                  //name="b_dc116fbba7f8fdf89516df36f_c1cf68d85c"
                  //tabindex="-1"
                  //value=""
                ///>
              //</div>
              //<div className="clear">
                //<input
                  //type="submit"
                  //value="Subscribe"
                  //name="subscribe"
                  //id="mc-embedded-subscribe"
                  //className="button"
                ///>
              //</div>
            //</div>
          //</form>
        //</div>
      //<div id="mc_embed_signup">
        //<form action="https://littlelaffs.us10.list-manage.com/subscribe/post?u=dc116fbba7f8fdf89516df36f&amp;id=c1cf68d85c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          //<div id="mc_embed_signup_scroll">
          //<label for="mce-EMAIL">Subscribe</label>
          //<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required>
            //<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_dc116fbba7f8fdf89516df36f_c1cf68d85c" tabindex="-1" value=""></div>
            //<div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></div>
            //</div>
        //</form>
      //</div>
