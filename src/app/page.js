import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2">
      <h1 className="font-bold">
        U. V. JUNE 2023 MID YEAR PERFORMANCE DASHBOARD
      </h1>
      <table className="border-collapse border-2 border-black w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-700 text-white"
            >
              <h2 className="text-center">Department/Group/Company</h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Employee</label>
            </td>
            <td className="border-2 border-black p-2 ">
              <input className="outline-none" type="text" />
            </td>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Date</label>
            </td>
            <td className="border-2 border-black p-2">
              <input className="outline-none" type="date" />
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Department</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <input className="outline-none" type="text" />
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Title</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <input className="outline-none" type="text" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-700 text-white"
            >
              <h2 className="text-center">Performance Rating</h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2  bg-blue-100 ">
              <textarea
                className="outline-none bg-blue-100"
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black w-1/2 mt-10">
        <tbody>
          <tr className="bg-gray-300">
            <td className="p-2 " colSpan={2}>
              <span className="text-center">Ranks</span>
            </td>
            <td className="p-2 ">
              <div className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <span className="text-center">Exceeding</span>
              </div>
            </td>
            <td className="p-2 ">
              <div className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <span className="text-center">Meeting</span>
              </div>
            </td>
            <td className="p-2 ">
              <div className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <span className="text-center">Below</span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={7}
              className="border-2 border-black p-2 bg-slate-500 text-white"
            >
              <span>Objetives</span>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Knowledge Skills & Abilities</a>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="KnowledgeSkills&Abilities" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="KnowledgeSkills&Abilities" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="KnowledgeSkills&Abilities" type="radio" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Communication</a>
            </td>

            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="Communication" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="Communication" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="Communication" type="radio" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Ownership</a>
            </td>

            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="Ownership" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="Ownership" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="Ownership" type="radio" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Performance</a>
            </td>

            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="Performance" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="Performance" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="Performance" type="radio" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Department Spesific Goals</a>
            </td>

            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="DepartmentSpesificGoals" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="DepartmentSpesificGoals" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="DepartmentSpesificGoals" type="radio" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 ">
              <a href="#">Professional Values</a>
            </td>

            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-green-600 w-5 h-5 inline-block m-2"></div>
                <input name="ProfessionalValues" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-blue-600 w-5 h-5 inline-block m-2"></div>
                <input name="ProfessionalValues" type="radio" />
              </label>
            </td>
            <td className="border-2 border-black p-2 ">
              <label className="flex items-center">
                <div className="bg-red-600 w-5 h-5 inline-block m-2"></div>
                <input name="ProfessionalValues" type="radio" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-800 text-white"
            >
              <h2 className="text-center">Leadership Summary</h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2">
              <textarea className="outline-none" cols="30" rows="10"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black w-1/2 mt-10">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-700 text-white"
            >
              <span className="text-center">
                Use this page for aditional feedback based on the tasks listed
                below
              </span>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Knowledge Skills & Abilities</label>
            </td>
            <td className="border-2 border-black p-2 ">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Communication</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Ownership</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Performance</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Department Spesific Goals</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Professionalism</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <textarea
                className="outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-500 text-white"
            >
              <h2 className="text-center">Next steps</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-800 text-white"
            >
              <h2 className="text-center">Smart Goal</h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2">
              <textarea className="outline-none" cols="30" rows="10"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-800 text-white"
            >
              <h2 className="text-center">Leader's Comment for development</h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2">
              <textarea className="outline-none" cols="30" rows="10"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border-2 border-black mt-10 w-1/2">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-800 text-white"
            >
              <h2 className="text-center">
                Employee's Comment for development
              </h2>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2">
              <textarea className="outline-none" cols="30" rows="10"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className=" mt-10 ">
        <tbody>
          <tr>
            <td className=" p-2 bg-gray-200">
              <input className="outline-none bg-gray-200" />
            </td>
            <td colSpan={2}>
              <div className="invisible">___________________</div>
            </td>
            <td className=" p-2 bg-gray-200">
              <input className="outline-none bg-gray-200" />
            </td>
          </tr>
          <tr>
            <td className=" p-2 bg-slate-600 text-white ">
              <span className="text-center">Leader's Name</span>
            </td>
            <td colSpan={2}>
              <div className="invisible">___________________</div>
            </td>
            <td className=" p-2 bg-slate-600 text-white ">
              <span className="text-center">Date & Signature</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className=" mt-10 ">
        <tbody>
          <tr>
            <td className=" p-2 bg-gray-200 ">
              <input className="outline-none bg-gray-200" />
            </td>
            <td colSpan={2}>
              <div className="invisible">___________________</div>
            </td>
            <td className=" p-2 bg-gray-200 ">
              <input className="outline-none bg-gray-200" />
            </td>
          </tr>

          <tr>
            <td className=" p-2 bg-slate-600 text-white">
              <span className="text-center">Employee's Name</span>
            </td>
            <td colSpan={2}>
              <div className="invisible">___________________</div>
            </td>
            <td className=" p-2 bg-slate-600 text-white">
              <span className="text-center">Date & Signature</span>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="bg-blue-500 rounded-lg w-1/4  p-2 active:scale-100 hover:scale-105  text-white mt-5 transition-all">
        Enviar
      </button>

      <table className="border-collapse border-2 border-black w-1/2 mt-10">
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="border-2 border-black p-2 bg-slate-700 text-white"
            >
              <span className="text-center">Objectives and Expectations</span>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Knowledge Skills & Abilities</label>
            </td>
            <td className="border-2 border-black p-2 ">
              <p>
                Core competencies that form career readiness <br /> Satisfactory
                level of skill and knowledge <br /> Broad business understanding
                and adaptability
              </p>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Communication</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <p>
                Listening Skills <br />
                The Channel - Proper way of sending the message <br />
                The Environment - Context of communication
              </p>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Ownership</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <p>
                Accountability in the workplace <br />
                Trust in the workplace <br />
                Taking ownership <br />
                Motivation <br />
                Proactive approach <br />
                Communicating about career goals <br />
                Take advantage of Learning opportunities <br />
                Forward Thinking attitude
              </p>
            </td>
          </tr>
          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Performance</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <p>
                Results & Actions <br />
                Written, verifiable mutually understood expectations
              </p>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Department Spesific Goals</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <p>
                Specific goals for department as established by the department
                head <br /> Goal focus for the betterness of department
              </p>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black p-2 bg-slate-500 text-white">
              <label>Professionalism</label>
            </td>
            <td colSpan={3} className="border-2 border-black p-2">
              <p>
                Professional Appearance <br />
                Reliable <br />
                Ethical Behavior <br />
                Organized <br />
                Accountable <br />
                Professional Language <br />
                Separates Personal and Professional <br />
                Positive Attitude <br />
                Emotional Control <br />
                Effective time management <br />
                Focused <br />
                Poised <br />
                Respectful of Others <br />
                Strong communicator <br />
                Possesses Soft Skills <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
