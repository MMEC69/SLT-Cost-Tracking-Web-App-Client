import React from 'react'
import { FaUserCircle } from "react-icons/fa";

export function SinglePopUpComment() {
  return (
    <div>
        <div>
            <div>
                <FaUserCircle />
            </div>
            <div>
                <span>User Name</span>
                <span>The comment user has placed</span>
            </div>
        </div>
        <div>
            <span>time</span>
        </div>
    </div>
  )
}
