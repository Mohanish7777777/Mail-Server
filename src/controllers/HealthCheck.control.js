export default async function healthCheck(req, res) {
    const clientIp = req.clientIp;
    return await res.status(200).json({ message: "OK", status: 200, clientIp: clientIp });
}
