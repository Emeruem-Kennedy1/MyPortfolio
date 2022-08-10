import React from 'react'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-text">
            <p>&copy; Copyright {year} - Kennedy Emeruem</p>
        </div>
    </footer>
  )
}
