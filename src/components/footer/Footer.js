import React from 'react'
import './footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-text">
            <p>&copy; {year} Kennedy Emeruem</p>
        </div>
    </footer>
  )
}
