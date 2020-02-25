import bcrypt from "bcryptjs";

describe('Password encrypter', () => {
  it('encrypts a password', async () => {
    const hashedPassword = bcrypt.hashPassword('hunter2')
    
    const compareHash = await bcrypt.compare("hunter2", hashedPassword);
    
    expected(compareHash).toBe(true)
  })
})