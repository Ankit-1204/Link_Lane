const Message = () => {
    return (
      <div className='flex justify-end mb-4'>
        <div className='max-w-xs mx-2'>
          <div className='flex justify-end'>
            <div className='w-10 h-10 rounded-full'>
              <img
                className='object-cover w-full h-full rounded-full'
                src={'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'}
                alt='Avatar'
              />
            </div>
          </div>
          <div className='bg-blue-500 text-white rounded-lg px-4 py-2 mt-1'>
            Hi! What's up?
          </div>
          <div className='text-xs text-gray-500 mt-1 text-right'>12:42</div>
        </div>
      </div>
    );
  };
  
  export default Message;
  