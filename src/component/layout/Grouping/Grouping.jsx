import GroupCard from "./GroupCard";
import grouopingJson from "./Grouping.json"

const Grouping = () => {
    const aryy = grouopingJson
    return (
        <div className="row mx-4 mt-5">
            {
                aryy.map((item) => {
                    // console.log(item.title);
                   return <GroupCard key={item.id} title={item.title} imageUrl={item.imageUrl}/>
                })
              
            }


        </div>

    );
}

export default Grouping;
