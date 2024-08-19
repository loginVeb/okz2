import Link from "next/link";

const LinkComp = (props) => {
    const { children, styles, patchUrl} = props;
    return (
        <Link href={patchUrl}className={`${props.styles.linkComp}`}
        >
           {children}
        </Link>
    )
}

export default LinkComp;