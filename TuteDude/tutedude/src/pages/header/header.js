import './header.css';


export default function Header() {
    return (<>
        <nav className="nav-container">
            <div className="nav-left-parts">
                <img src="https://s3-alpha-sig.figma.com/img/6686/713b/d591de64c9ff26d31b0161505286349a?Expires=1686528000&Signature=A7Lz~hA9dVbwu6-6wTWzwj5Hxb-ssdOEO7Y-jeQuZMhXin5S~8lgyQ1kQr0yl7Z2vMX4~uiNWyi6mnpBHjnAsBSB7px~YZyKr9OlYea2prEx1F8WP5ilRam0Y69fjXxVfltHr2-XXX0jMlg0zqVSAIkZMtgLS7QEcJO5G8aVxW~SkxpOOp5~Du-FqdT09-n6x0oP-PlI3FCJVOzTx3tGL-DpAGbuFcOiAJvFgNyqKTtsf~W6~bKLF4vB-BdPVYPd3MvHIhz2IfqAZVx-0hlugqvjn-xi7OxMCdGZ15Y-OouEXXF1vQ3r5Xvi72Fry7uoByPeVcXf86Q4-3yWe9jhpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
            <div className="nav-right-parts">
                <div className="nav-right-part1">My Assignment</div>
                <div className="nav-right-part2">Chat with Mentor</div>
                <div className="nav-right-part3">
                    <i className="bi bi-person-i">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                    </i>
                    <p>ProfileName</p>
                    <i className="bi bi-chevron-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 2.708 0L8 10.293l5.646-5.647a.5.5 0 0 1 2.708.708l-6 6a.5.5 0 0 1-3.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </i>

                </div>
            </div>
                <div className="nav-right-part4">
                    <p>ProfileName</p>
                    <i className="bi bi-chevron-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 2.708 0L8 10.293l5.646-5.647a.5.5 0 0 1 2.708.708l-6 6a.5.5 0 0 1-3.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </i>

                </div>
        </nav>
    </>)
}