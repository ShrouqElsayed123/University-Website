import Header from "../../Dashboard Component/Home Management component/Header/Header";

export default function VideoDashboard() {
   



    return (
        <div className="flex flex-col gap-6 p-6  ">
            <Header title="Video Section" />

                <div>
                    
                    <video
                        src=''
                        controls
                        className="w-full max-h-64 rounded my-4"
                    ></video>

                    {/* Update Form */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Update Title"
                     
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <textarea
                        name="paragraph"
                        placeholder="Update Description"
                        
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        
                        className="mb-2"
                    />
                    <button
                        
                        className="px-4 py-2 bg-yellow-600 text-white rounded"
                    >
                        Update Video
                    </button>
                </div>
        
        </div>
    );
}
