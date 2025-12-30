const Card = ({ data }) => {
  return (
    <div
      className="bg-slate-900 p-5 rounded-lg flex flex-col gap-4 
                    justify-around
                    border border-slate-700
                    transition-all duration-300
                    hover:border-indigo-400 hover:-translate-y-1">
      <div className="flex flex-col  gap-2">
        <data.icon className="text-2xl text-indigo-400" />
        <h3 className="text-lg font-semibold text-gray-200">{data.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-700 text-gray-300 px-3 py-1 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
