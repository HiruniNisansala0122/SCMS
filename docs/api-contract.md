# API Contract

## Auth Module
- POST /api/auth/register
- POST /api/auth/login
- GET /api/users/me

## Complaint Module
- POST /api/complaints
- GET /api/complaints/my
- GET /api/complaints/:id

## Engine Module
- POST /api/engine/analyze

## Staff Module
- GET /api/staff/assigned
- PUT /api/staff/complaints/:id/resolve

## Tracking Module
- GET /api/complaints/:id/history
- PUT /api/complaints/:id/verify

## Admin Module
- GET /api/departments
- POST /api/departments
- GET /api/admin/complaints
- GET /api/admin/reports

## Complaint Status Values
SUBMITTED → ASSIGNED → IN_PROGRESS → RESOLVED → VERIFIED_CLOSED
