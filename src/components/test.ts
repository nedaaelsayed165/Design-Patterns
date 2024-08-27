import { toast, observable } from "./utils"; 

describe('toast', () => {
    let notifyMock: jest.Mock;
    let dismissAllMock: jest.Mock;

    beforeEach(() => {
        
        notifyMock = jest.fn();
        dismissAllMock = jest.fn();

        
        observable.notify = notifyMock;
        observable.dismissAll = dismissAllMock;

        jest.clearAllMocks(); 
    });

   test('should notify observers with a basic message', () => {
        toast('Test message');

        expect(notifyMock).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(Number),
            message: 'Test message'
        }));
    });

   test('should notify observers with a success message', () => {
        toast.success('Success message');

        expect(notifyMock).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(Number),
            message: 'Success message',
            variant: 'success'
        }));
    });

   test('should notify observers with an error message', () => {
        toast.error('Error message');

        expect(notifyMock).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(Number),
            message: 'Error message',
            variant: 'error'
        }));
    });

   test('should notify observers with a warning message', () => {
        toast.warning('Warning message');

        expect(notifyMock).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(Number),
            message: 'Warning message',
            variant: 'warning'
        }));
    });

   test('should dismiss all toasts', () => {
        toast.dismissAll();

        expect(dismissAllMock).toHaveBeenCalled();
    });
});


// let dismissAllMock: jest.Mock;

// // eslint-disable-next-line prefer-const
// dismissAllMock = jest.fn();
// observable.dismissAll = dismissAllMock;
3
// test('should dismiss all toasts', () => {
//     toast.dismissAll();

//     expect(dismissAllMock).toHaveBeenCalled();
// });