import React from "react"

import Layout from "../components/layout"
import '../styles/subscribe.css'

class SubscriberPage extends React.Component {
  render() {
    return (
      <Layout title='Subscribe'>
        <div className="subscribe">
          <h4>
            Subscribe to little laffs! Your email will not be shared. No spam, only laffs.
          </h4>
          <div
            className="subscribe-form"
            dangerouslySetInnerHTML={this.embeddedForm()}
          >
          </div>
        </div>
      </Layout>
    )
  }

  embeddedForm() {
    return {
      __html: `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://littlelaffs.us10.list-manage.com/subscribe/post?u=dc116fbba7f8fdf89516df36f&amp;id=c1cf68d85c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required style="margin: 0 auto; margin-bottom: 25px; text-align: center; width: 90%; max-width: 385px; padding: 15px;">
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_dc116fbba7f8fdf89516df36f_c1cf68d85c" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="margin: 0 auto; padding: 10px; height: 50px;"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
      `
    };
  }
}

export default SubscriberPage
