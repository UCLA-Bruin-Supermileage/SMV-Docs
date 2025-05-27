# Django Administration Panel

The Django administration interface provides a powerful and secure way to manage database content through a web-based UI. This is especially useful for non-developers or project leads who need to interact with data without direct access to the database.

## Accessing the Admin Panel

You can access the Django Admin at:

**[prod-django.bruinsmv.com/admin](https://prod-django.bruinsmv.com/admin)**

>  **Note**: Login credentials are required. If you need access, please contact a lead or check the Notion Logins page.

---

## Key Features

### 🧑‍💼 User Authentication and Permissions
- Built-in user model with support for superusers, staff, and regular users
- Granular permission controls for models and actions (add, change, delete, view)
- User and group management from the admin interface

### 📄 Model Management
- Auto-generated UI for each registered model
- CRUD (Create, Read, Update, Delete) operations for database records
- Filters, search, and pagination out of the box

### 🛠 Customization
- Admin interface can be customized with:
  - Custom list displays (`list_display`)
  - Filters (`list_filter`)
  - Search fields (`search_fields`)
  - Inline editing of related models
- Rich text fields, image/file uploads supported

### Integration with Project Models
- Automatically syncs with models registered in `admin.py`
- Supports many-to-one, many-to-many, and foreign key relationships

### Dashboard Overview
- Quick overview of registered models and recent actions
- Easy navigation to model-specific views

---

## Troubleshooting

If the admin interface is not working:
- Confirm the server is up at `prod-django.bruinsmv.com`
- Ensure the database is running and reachable
- Check `admin.py` to verify models are properly registered

---

## Resources

- [Django Admin Documentation](https://docs.djangoproject.com/en/stable/ref/contrib/admin/)
