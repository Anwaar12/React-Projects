export default function TabButton({children,onSelect,isSelected}){
    
    return (
        <div><button className={isSelected?"active":null} onClick={onSelect}>{children}</button></div>
    )
}