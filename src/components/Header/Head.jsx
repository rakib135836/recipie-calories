

const Head = () => {
    const textType = "text";
    return (
        <div className="flex items-center">
            <h1 className="text-4xl font-bold"> Recipe Calories</h1>

            <div>
                <ul className="flex gap-2">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>

            <div>
                 <input type={textType} />
            </div>
        </div>
    );
};

export default Head;