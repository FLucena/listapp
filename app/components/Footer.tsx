const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <nav className="space-x-4">
                    <a href="https://flucena.vercel.app/" className="text-gray-600 hover:text-gray-800">{`© All rights reserved - ${currentYear} - FL Automations`}</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;