import { links } from '../datas/links';

function NavLinks() {
    const linksContent = links
    return (
        <ul>
            {linksContent.map((link) => (
                <li key={link.id}>
                    {link.isGood ? <span>🔥</span> : <span>👎</span>}
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;