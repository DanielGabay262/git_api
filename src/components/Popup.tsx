import React from 'react'
import popupCSS from './Popup.module.scss'
import { useState } from 'react'
import { useAddComment } from './ReactQueryWrapper'

interface props {
  userName: string,
  repoName: string,
  issueNumber: string,
  setIsAddCommentClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({userName, repoName, issueNumber, setIsAddCommentClicked}: props) => {

  const [comment, setComment] = useState("")
  const mutation = useAddComment()

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (comment) {
      mutation.mutate({userName, repoName, issueNumber, comment})
      setIsAddCommentClicked(false)
    }
  }

  return (
    <div className={popupCSS.popupBox}>
        <div className={popupCSS.box}>
          <div className={popupCSS.headline}>
            {`Add comment to "test":`}
          </div>
          <form className={popupCSS.inputForm} onSubmit={handleAddComment}>
            <textarea
                className={popupCSS.inputTxt}
                rows={8}
                name="inputText"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter Comment..."/>
            <div>
              <button type="submit">
                Send
              </button>
              <button>
                Cancle
              </button>
            </div>
          </form>
          <span className={popupCSS.closeIcon} onClick={() => setIsAddCommentClicked(false)}>x</span>
        </div>
    </div>
  )
}

export default Popup