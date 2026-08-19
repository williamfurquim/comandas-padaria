export const globalErrorHandler = (err, req, res, next) => {
    
    console.log(err);

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || 'Erro interno do servidor',
        timestamp: new Date().toISOString()
    });
}