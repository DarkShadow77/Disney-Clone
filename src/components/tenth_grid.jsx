import gridStyle from "../assets/css/tenth_grid.module.css"
import TenthCard from "./cards/tenth_card";

function TenthGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridTen = [
        { 
            title: "disney store club",
            one: "Online Help (Frequently Asked Questions)",
            two: "Disney sites around the world",
            three: "terms of service" 
        },
        { 
            title: "disney card club",
            one: "Contact information",
            two: "Social Responsibility",
            three: "Copyright/Trademark" 
        },
        { 
            title: "MovieNEX CLUB",
            one: "Company information",
            two: "privacy policy",
            three: "(Note) Regarding product listings of linked shops" 
        },
        { 
            title: "fantastic disney",
            one: "Recruitment information",
            two: "Privacy policy supplement"
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridTen.map((items)=>{
                        return (<TenthCard title={items.title} one={items.one} two={items.two} three={items.three}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default TenthGrid;