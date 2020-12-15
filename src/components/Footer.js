import React from 'react'
import "../styles/footer.css";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer id="footer">
            <p>Copyright &copy; {year} (G2H)</p>
        </footer>
    )
}

export default Footer
