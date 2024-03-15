import { useState } from "react";

function FavoriteColor() {
    // ett state med vårt objekt som har namn och favvofärg i sig
    const [fave, setFave] = useState({
        name: "Tim",
        color: "Blå"
    });
    const [editMode, setEditMode] = useState(false);
    const [nameEdit, setNameEdit] = useState(fave.name);
    const [colorEdit, setColorEdit] = useState(fave.color);

    function handleSave() {
        let newFaveObj = {
            name: nameEdit,
            color: colorEdit
        };
        setFave(newFaveObj);
        setEditMode(false);
    };

    return (
        <article>
            {
                editMode ?
                    <section>
                        <input defaultValue={fave.name} onChange={(e) => setNameEdit(e.target.value)} />
                        <input defaultValue={fave.color} onChange={(e) => setColorEdit(e.target.value)} />
                        <button onClick={handleSave}>Spara</button>
                    </section>
                    :
                    <section>
                        <p>{fave.name}</p>
                        <p>{fave.color}</p>
                        <button onClick={() => setEditMode(true)}>Ändra</button>
                    </section>
            }
        </article>
    )
}
export default FavoriteColor;