import {MoveRight} from "lucide-react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">1</h2>
        <div>
            <p className="text-l leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque quod animi molestiae labore dolorem.</p>
            <div className="flex justify-between">
                <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">Satisfied</button>
                <button className="bg-blue-600 text-white px-3 py-2 rounded-full"><MoveRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
