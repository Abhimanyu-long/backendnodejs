// what is the status code ?


// Scenario	                                        Status Code
// Successful GET request	                        200 OK
// Successful POST request	                        201 Created
// Updating a resource	                            200 OK / 204 No Content
// Deleting a resource	                            204 No Content
// Client sends bad data	                        400 Bad Request
// User not logged in	                            401 Unauthorized
// User lacks permissions	                        403 Forbidden
// Page or API not found	                        404 Not Found
// Data conflict (e.g., duplicate)	                409 Conflict
// Server failure	                                500 Internal Server Error