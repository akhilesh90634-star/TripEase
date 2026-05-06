const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

async function verifyToken(req) {
  const header = req.headers.authorization;

  if (!header) return { error: "No token" };

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await UserModel.findById(decoded.id);

    if (!user) return { error: "User not found" };

    return { user };

  } catch {
    return { error: "Invalid token" };
  }
}


// ADMIN ONLY
async function adminAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (result.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// USER ONLY
async function userAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (result.user.role !== "user") {
    return res.status(403).json({ message: "User only" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// AGENT ONLY
async function agentAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (result.user.role !== "agent") {
    return res.status(403).json({ message: "Agent only" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// USER OR ADMIN
async function userOrAdminAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (!["user", "admin"].includes(result.user.role)) {
    return res.status(403).json({ message: "Access denied" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// ADMIN OR AGENT
async function adminOrAgentAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (!["admin", "agent"].includes(result.user.role)) {
    return res.status(403).json({ message: "Admin or Agent only" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// USER OR AGENT
async function userOrAgentAuth(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (!["user", "agent"].includes(result.user.role)) {
    return res.status(403).json({ message: "User or Agent only" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


// ALL ROLES
async function authAllRoles(req, res, next) {
  const result = await verifyToken(req);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  }

  if (!["user", "admin", "agent"].includes(result.user.role)) {
    return res.status(403).json({ message: "Access denied" });
  }

  req.userId = result.user._id;
  req.userRole = result.user.role;
  next();
}


module.exports = {
  adminAuth,
  userAuth,
  agentAuth,
  userOrAdminAuth,
  adminOrAgentAuth,
  userOrAgentAuth,
  authAllRoles
};