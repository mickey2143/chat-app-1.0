
function GroupDetail({ group, click }) {
    return (
        <li className="border border-blue-950 px-3 py-4 rounded-xl " onClick={click}>

            <h4 className="text-lg">{group.groupName}</h4>
            <p className="text-md">{group.description}</p>
            <p className="text-md">{group.members}</p>
            <p className="text-sm">
                {group.topic.map((top) => `#${top} `)}
            </p>


        </li>)
}

export default GroupDetail