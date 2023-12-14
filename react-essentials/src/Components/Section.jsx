export default function Section({children,text,...others}){
    return(
        <section {...others}>
            <h2>{text}</h2>
            {children}
        </section>
    )
}