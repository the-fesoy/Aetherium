import React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share"
import { BsTwitterX } from "react-icons/bs"

const SocialMediaShare = () => {
  const url: string = window.location.href
  const message: string = "Yo Check out this new shit"
  return (
    <>
      <div className="share-to-container d-flex align-items-center gap-30">
        <h3 className="px-4">Share To: </h3>
        <div className="social-media-container d-flex flex-wrap gap-30 justify-content-center align-items-center py-2">
          <EmailShareButton url={url} subject="Aetherium" body={message}>
            <EmailIcon size={40} round />
          </EmailShareButton>
          <FacebookShareButton url={url} qoute={message}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title="Aetherium product"
            summary={message}
            source="Aetherium.com"
          >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <TelegramShareButton title="Aetherium product" url={url}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>
          <WhatsappShareButton title="Atherium product" url={url}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <TwitterShareButton url={url} title="Aetherium product">
            <BsTwitterX
              color="white"
              size={38}
              className="p-2"
              style={{ backgroundColor: "black", borderRadius: "50%" }}
            />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}

export default SocialMediaShare
