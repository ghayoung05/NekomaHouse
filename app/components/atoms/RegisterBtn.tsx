export default function RegisterBtn({ setShowRegisterModal }: { setShowRegisterModal: (show: boolean) => void }) {
  return (
    <button 
          onClick={() => setShowRegisterModal(true)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-300"
        >
          Register
        </button>
  );
}