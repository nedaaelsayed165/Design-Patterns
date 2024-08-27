// import { Observable } from "../utils/observable";
// import { toast, observable } from "../utils"; // استبدل 'path-to-toast' بالمسار الصحيح لملف الكود

// describe('toast', () => {
//     let notifySpy: jest.SpyInstance;
//     let dismissAllSpy: jest.SpyInstance;

//     beforeEach(() => {
//         // التجسس على دوال notify و dismissAll
//         notifySpy = jest.spyOn(observable, 'notify');
//         dismissAllSpy = jest.spyOn(observable, 'dismissAll');
//         jest.clearAllMocks(); // تنظيف السخرية قبل كل اختبار
//     });

//     it('should notify observers with a basic message', () => {
//         toast('Test message');

//         expect(notifySpy).toHaveBeenCalledWith({
//             id: expect.any(Number),
//             message: 'Test message'
//         });
//     });

//     it('should notify observers with a success message', () => {
//         toast.success('Success message');

//         expect(notifySpy).toHaveBeenCalledWith({
//             id: expect.any(Number),
//             message: 'Success message',
//             variant: 'success'
//         });
//     });

//     it('should notify observers with an error message', () => {
//         toast.error('Error message');

//         expect(notifySpy).toHaveBeenCalledWith({
//             id: expect.any(Number),
//             message: 'Error message',
//             variant: 'error'
//         });
//     });

//     it('should notify observers with a warning message', () => {
//         toast.warning('Warning message');

//         expect(notifySpy).toHaveBeenCalledWith({
//             id: expect.any(Number),
//             message: 'Warning message',
//             variant: 'warning'
//         });
//     });

//     it('should dismiss all toasts', () => {
//         toast.dismissAll();

//         expect(dismissAllSpy).toHaveBeenCalled();
//     });
// });
